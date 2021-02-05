import * as yup from 'yup';

export default yup.object().shape({
  title: yup
    .string()
    .default('')
    .max(25)
    .required(),
});
