type InvalidFeedbackProps = { problemField: string };

export const InvalidFeedback = ({ problemField }: InvalidFeedbackProps) => {
  return (
    <div className="invalid-feedback">Please enter a valid {problemField}.</div>
  );
};
