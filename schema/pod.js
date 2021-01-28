import * as yup from 'yup';

const mediaSchema = yup.object().shape({
  path: yup
    .string()
    .default(null)
    .nullable(),
  url: yup
    .string()
    .default(null)
    .nullable(),
});

export default yup.object().shape({
  _id: yup.string(),
  hostId: yup.string().required(),
  title: yup
    .string()
    .default('')
    .max(25)
    .required(),
  image: mediaSchema,
  price: yup
    .number()
    .min(1)
    .default(null)
    .nullable()
    .required(),
  time: yup.string().required(),
  description: yup
    .string()
    .default('')
    .max(800)
    .required(),
  length: yup
    .number()
    .default('')
    .positive()
    .integer()
    .required(),
  videoLink: yup
    .string()
    .nullable()
    .default(null),
  memberIds: yup.array().default([]),
});
