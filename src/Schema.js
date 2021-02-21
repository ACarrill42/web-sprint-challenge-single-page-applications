import * as yup from 'yup';

const FormSchema = yup.object().shape({
  firstName: yup
  .string()
  .required('Please enter your first name')
  .min(2, 'Name must be longer than 2 characters'),

  lastName: yup
  .string()
  .required('Please enter your last name')
  .min(2, 'Surname must be longer than 2 characters'),

  pep: yup
  .boolean(),

  sausage: yup
  .boolean(),

  mushroom: yup
  .boolean(),

  greenPep: yup 
  .boolean(),

  special: yup 
  .string()
  .required('Please enter so we can help you better')
})

export default FormSchema