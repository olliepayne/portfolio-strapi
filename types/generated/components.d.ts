import type { Struct, Schema } from '@strapi/strapi';

export interface BasicSeo extends Struct.ComponentSchema {
  collectionName: 'components_basic_seos';
  info: {
    displayName: 'SEO';
    icon: 'search';
  };
  attributes: {
    titleTag: Schema.Attribute.String;
    metaDescription: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'basic.seo': BasicSeo;
    }
  }
}
