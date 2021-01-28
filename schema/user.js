import * as yup from 'yup';
import { DateTime } from 'luxon';

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
  isHost: yup.bool(),
  profileImage: mediaSchema,
  videoLink: yup
    .string()
    .default('')
    .nullable(),
  nickname: yup
    .string()
    .default('')
    .max(30)
    .required(),
  bio: yup
    .string()
    .default('')
    .max(500)
    .nullable(),
  facebook: yup
    .string()
    .default('')
    .nullable(),
  instagram: yup
    .string()
    .default('')
    .nullable(),
  twitter: yup
    .string()
    .default('')
    .nullable(),
  hostPods: yup.array().default([]),
  hostPodIds: yup.array().default([]),
  memberPods: yup.array().default([]),
  memberPodIds: yup.array().default([]),
  // Metadata
  sub: yup.string().required(),
  email: yup.string().email('Must be a valid email address'),
  firstName: yup
    .string()
    .default('')
    .nullable()
    .required('First Name is a required field'),
  lastName: yup
    .string()
    .default('')
    .nullable()
    .required('Last Name is a required field'),
  pronoun: yup
    .string()
    .default('')
    .nullable(),
  birthday: yup
    .date()
    .max(DateTime.local().minus({ years: 13 }), 'Must be at least 13 years old to register'),
  phone: yup.string().nullable(),
  stripeCustomerId: yup.string(),
  stripeAccount: yup
    .string()
    .default('')
    .nullable(),
  stripeVerified: yup.bool(),
});
