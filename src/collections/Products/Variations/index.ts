import { Condition, Field } from 'payload'
import getCostsGroup from '../Common/Costs'
import getPriceGroup from '../Common/Prices'

export const hasVariations =
  (reversed: boolean = false): Condition =>
  (data, siblingData, { user }) => {
    if (reversed) {
      return !data.enableVariations
    }
    return !!data.enableVariations
  }

const Variations: Field = {
  name: 'variations',
  type: 'array',
  labels: {
    plural: {
      en: 'Variations',
      vi: 'Các Biến Thể',
    },
    singular: {
      en: 'Variation',
      vi: 'Biến Thể',
    },
  },
  label: {
    en: 'Variations',
    vi: 'Các Biến Thể',
  },
  fields: [
    {
      name: 'variationName',
      type: 'text',
      label: {
        en: 'Variation Name',
        vi: 'Tên Biến Thể',
      },
    },
    getCostsGroup(true),
    getPriceGroup(true),
  ],
  admin: {
    condition: hasVariations(),
    components: {
      RowLabel: '/custom-fields/LabelledArrayRow',
    },
  },
}

export default Variations
