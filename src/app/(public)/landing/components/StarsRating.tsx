import { Star } from '@mui/icons-material';

export const StarRating = ({ rating }: { rating: number }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, index) => {
        const starValue = index + 1;
        const isFilled = starValue <= rating;
        const isHalfFilled = !isFilled && starValue - 0.5 <= rating;

        return (
          <div key={index} className="relative w-6 h-6">
            {/* Empty Star (Background) */}
            <Star
              className="absolute top-0 left-0 w-6 h-6"
              style={{
                color: '#e2e8f0', // Light gray for empty stars
                stroke: '#cccccc',
                strokeWidth: 1.0,
              }}
            />

            {/* Filled Star (Foreground) */}
            {isFilled ? (
              <Star
                className="absolute top-0 left-0 w-6 h-6"
                style={{
                  color: '#f59e0b',
                  stroke: '#cccccc',
                  strokeWidth: 1.0,
                }}
              />
            ) : isHalfFilled ? (
              <div className="absolute top-0 left-0 w-6 h-6 overflow-hidden" style={{ width: '50%' }}>
                <Star
                  className="w-6 h-6"
                  style={{
                    color: '#f59e0b',
                    stroke: '#cccccc',
                    strokeWidth: 1.0,
                  }}
                />
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
};