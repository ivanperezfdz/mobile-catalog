import type { PhoneRepository } from '@/domain/phones/repositories/PhoneRepository';
import type { Phone, ProductListItem } from '@/domain/phones/entities/Phone';

export class PhoneApiRepository implements PhoneRepository {
  private readonly API_KEY = process.env.NEXT_PUBLIC_API_KEY;
  private readonly API_URL = process.env.NEXT_PUBLIC_API_URL;

  private async fetchWithAuth(endpoint: string) {
    const response = await fetch(`${this.API_URL}${endpoint}`, {
      headers: {
        'x-api-key': this.API_KEY!,
      },
    });
    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }
    return response.json();
  }

  private async fetchPhones(
    endpoint: string,
    limit: number
  ): Promise<ProductListItem[]> {
    const fetchedItems = new Map<string, ProductListItem>();
    let currentPage = 1;

    // We use limit * 2 to fetch more items than needed to account for duplicates
    while (fetchedItems.size < limit) {
      const offset = (currentPage - 1) * limit;
      const phones = await this.fetchWithAuth(
        `${endpoint}&offset=${offset}&limit=${limit * 2}`
      );

      if (phones.length === 0) break;

      for (const phone of phones) {
        fetchedItems.set(phone.id, phone);
        if (fetchedItems.size === limit) break;
      }

      currentPage++;
    }

    return Array.from(fetchedItems.values());
  }

  async getPhones(
    page: number,
    limit: number = 20
  ): Promise<ProductListItem[]> {
    return this.fetchPhones(`/products?`, limit);
  }

  async searchPhones(
    query: string,
    limit: number = 20
  ): Promise<ProductListItem[]> {
    return this.fetchPhones(
      `/products?search=${encodeURIComponent(query)}`,
      limit
    );
  }

  async getPhoneById(id: string): Promise<Phone | null> {
    try {
      return await this.fetchWithAuth(`/products/${id}`);
    } catch (error) {
      if (error instanceof Error && error.message.includes('404')) {
        return null;
      }
      throw error;
    }
  }
}
