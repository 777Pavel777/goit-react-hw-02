import Description from './description/Description';
import Options from './options/Options';
import Feedback from './feedback/Feedback';
import Notification from './notification/Notification';
import { useState, useEffect } from 'react';

export default function App() {
  const updateFeedback = () => {
    const savedClicks = localStorage.getItem('clickCount');
    return savedClicks !== null
      ? JSON.parse(savedClicks)
      : { good: 0, neutral: 0, bad: 0 };
  };

  const [feedbackTypes, setFeedbackTypes] = useState(updateFeedback);
  const handleFeedback = feedbackType => {
    setFeedbackTypes({
      ...feedbackTypes,
      [feedbackType]: feedbackTypes[feedbackType] + 1,
    });
  };

  const resetClicks = () => {
    setFeedbackTypes({ good: 0, neutral: 0, bad: 0 });
  };

  useEffect(() => {
    localStorage.setItem('clickCount', JSON.stringify(feedbackTypes));
  }, [feedbackTypes]);

  const totalFeedback =
    feedbackTypes.good + feedbackTypes.neutral + feedbackTypes.bad;

  const positiveCalc = Math.round((feedbackTypes.good / totalFeedback) * 100);

  return (
    <>
      <Description />
      <Options
        onUpdate={handleFeedback}
        onReset={resetClicks}
        feedbackTypes={feedbackTypes}
        totalValue={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          value={feedbackTypes}
          totalValue={totalFeedback}
          percentCalc={positiveCalc}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}
