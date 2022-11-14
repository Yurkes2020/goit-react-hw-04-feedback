import PropTypes from 'prop-types';

import { FeedbackList } from './Statistic.styled';

export const Statistic = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => (
  <FeedbackList>
    <li>Good: {good}</li>
    <li>Nautral: {neutral}</li>
    <li>Bad: {bad}</li>
    <li>Total: {total}</li>
    <li>Positive feedback:{positivePercentage}%</li>
  </FeedbackList>
);

Statistic.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
