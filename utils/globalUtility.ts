//Toast Logic
import toast from '~/utils/toast';

// Call toast message, by default success
export const addToast = (toastText: string, toastType: string | null = 'Success') => {
  toast.add({
    message: {
      text: toastText,
      type: toastType,
    },
  });
}

//Convert Milliseconds to Date Time
export const formatTimestamp = (timestamp: number) => {
  const date = new Date(timestamp);
  return date.toLocaleString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  });
}

// format SFDC date
export const formatDate = (dateTimeString: string): string => {
  const date = new Date(dateTimeString);
  const options: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  };
  return date.toLocaleString('en-IN', options);
};

// filter debug log
export const filterDebugLog = (logValue: string) => {
  const filteredLines = logValue.split('\n').filter(line => {
    return line.includes('USER_DEBUG') || line.includes('FATAL_ERROR') || line.includes('EXCEPTION_THROWN');
  });
  return filteredLines.join("\n");
};

//Get current time + extra time
export const getCurrentDateTime = (extraMinutes = 0, isExtraTime = false, baseDate = new Date()) => {
  const year = baseDate.getFullYear();
  const month = (baseDate.getMonth() + 1).toString().padStart(2, '0');
  const day = baseDate.getDate().toString().padStart(2, '0');
  let hours = baseDate.getHours();
  let minutes = baseDate.getMinutes() + extraMinutes;
  // Handle overflow of minutes
  if (minutes >= 60) {
    hours += Math.floor(minutes / 60);
    minutes %= 60;
  }
  // Handle overflow of hours (past midnight)
  if (hours >= 24) {
    hours %= 24;
    // Increment the day
    baseDate.setDate(baseDate.getDate() + 1);
    // Update year, month, and day
    const newYear = baseDate.getFullYear();
    const newMonth = (baseDate.getMonth() + 1).toString().padStart(2, '0');
    const newDay = baseDate.getDate().toString().padStart(2, '0');

    return `${newYear}-${newMonth}-${newDay}T${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
  }

  return `${year}-${month}-${day}T${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
};

//debounce
export function debounce(func: Function, delay: number) {
  let timeout: ReturnType<typeof setTimeout> | null = null;

  return function (this: unknown, ...args: any) {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

//Copy to clipboard
export const copyToClipboard = (copyValue: any, showToast: boolean) => {
  navigator.clipboard.writeText(copyValue)
    .then(() => {
      // buttonLabel.value = 'Copied!';
      if (showToast) {
        addToast('Copied to clipboard.', 'Success');
      }
      // setTimeout(() => {
      //     buttonLabel.value = '';
      // }, 1500);
    })
    .catch((err) => {
      console.error('Error copying to clipboard:', err);
    });
};
