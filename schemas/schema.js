// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';
// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// We import object and document schemas
import blockContent from './blockContent';
import category from './category';
import product from './product';
import vendor from './vendor';
import productVariant from './productVariant';
import productPricing from './productPricing';
import productShipping from './productShipping';
import coupon from './coupon';
import page from './page';
import article from './article';
import order from './order';
import customer from './customer';
import siteSettings from './siteSettings';
import address from './address';
import review from './review';

import localeString from './locale/String';
import localeText from './locale/Text';
import localeBlockContent from './locale/BlockContent';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    product,
    category,
    vendor,
    order,
    customer,
    coupon,
    page,
    article,
    review,
    siteSettings,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,
    localeText,
    localeBlockContent,
    localeString,
    productVariant,
    productPricing,
    productShipping,
    address,
  ]),
});
