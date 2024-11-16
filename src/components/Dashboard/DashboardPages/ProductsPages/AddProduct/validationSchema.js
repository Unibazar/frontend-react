// validationSchema.js
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  brand: yup.string().required('Brand is required'),
  bullet_point: yup.string().required('Bullet point is required'),
  color: yup.string().required('Color is required'),
  condition_type: yup.string().required('Condition type is required'),
  country_of_origin: yup.string().required('Country of origin is required'),
  department: yup.string().required('Department is required'),
  hsn_code: yup.string().required('HSN Code is required'),
  item_name: yup.string().required('Item name is required'),
  item_type_name: yup.string().required('Item type is required'),
  manufacturer: yup.string().required('Manufacturer is required'),
  material: yup.string().required('Material is required'),
  model_name: yup.string().required('Model name is required'),
  product_description: yup.string().required('Product description is required'),
  packer_contact_information: yup.string().required('Packer contact info is required'),
  warranty_description: yup.string().required('Warranty description is required'),
  unit_count: yup
    .number()
    .required('Unit count is required')
    .positive('Must be greater than zero'),
});

export default validationSchema;
