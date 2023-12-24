import { Client } from '@notionhq/client'

export class ContentGateway {
  private static notion = new Client({
    auth: 'secret_yzTZWjQXFRqnMeB6emUom4bygpq0v68cYxcyJpvZYsu',
  })

  static async getWordsHero() {
    const response = await this.notion.databases.query({
      database_id: '867c99e7ed8a44a29ed981cdb4d309ac',
    })

    return response.results.map(
      (item: any) => item.properties.Word.title[0].plain_text
    )
  }

  static async getDiffHero() {
    const response = await this.notion.databases.query({
      database_id: '222ecb85fe1844f099edbafac0abd7b5',
    })

    return response.results.map(
      (item: any) => item.properties.Word.title[0].plain_text
    )
  }

  static async getTestimonials() {
    const response = await this.notion.databases.query({
      database_id: '3f41e5c6cf3846869d9fd848e83b8fac',
      filter: {
        property: 'Status',
        select: {
          equals: 'Postada',
        },
      },
      sorts: [
        {
          property: 'Name',
          direction: 'ascending',
        },
      ],
    })

    return response.results.map((line: any) => ({
      thumbnail: line?.properties?.Thumbnail?.files?.[0]?.file?.url,
      business: line?.properties?.Business?.rich_text?.[0]?.plain_text,
      testimonial: line?.properties?.Testimonial?.rich_text?.[0]?.plain_text,
      name: line?.properties?.Name?.title?.[0]?.plain_text,
    }))
  }

  static async getLinks() {
    const response = await this.notion.databases.query({
      database_id: 'ffa3e514ccdb4975b48cd7c24c63ea5b',
    })

    return response.results.map((line: any) => ({
      link: line?.properties?.Link?.url,
      title: line?.properties?.Title?.title?.[0]?.plain_text,
    }))
  }
}
