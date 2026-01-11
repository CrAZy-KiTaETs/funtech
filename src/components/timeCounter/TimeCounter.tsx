import Countdown from 'react-countdown';

type ITimeCounterProps = {
  date: Date | number | string;
  className?: string;
};

export const TimeCounter = ({ date, className }: ITimeCounterProps) => {
  const renderer = ({
    hours,
    minutes,
    seconds,
    completed,
  }: {
    hours: number;
    minutes: number;
    seconds: number;
    completed: boolean;
  }) => {
    if (completed) return null;

    const hh = String(hours).padStart(2, '0');
    const mm = String(minutes).padStart(2, '0');
    const ss = String(seconds).padStart(2, '0');

    return <span className={className}>{`${hh}h ${mm}m ${ss}s`}</span>;
  };

  const dateValue = Number(new Date(date));
  return <Countdown key={dateValue} renderer={renderer} date={dateValue} />;
};
