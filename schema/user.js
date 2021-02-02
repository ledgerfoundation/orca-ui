import * as yup from 'yup';
import { DateTime } from 'luxon';

export default yup.object().shape({
  address: yup.string(),
});
