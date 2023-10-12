import { ReportFormProps } from "@/types/myTypes";
import { AiFillCloseCircle } from "react-icons/ai";
const ReportForm = ({ setReportVisible, reportVisible }: ReportFormProps) => {
  const handleSubmit = () => {
    setReportVisible(false);
  };

  return (
    <div
      className={`fixed w-3/4 h-80 max-w-md z-10 bg-red-500 top-1/2 left-1/2 -translate-y-1/2 transition-all duration-300 ease-in delay-150 ${
        reportVisible
          ? "-translate-x-1/2 opacity-100"
          : "-translate-x-[200%] opacity-0"
      }`}
    >
      <div>
        <p>report a violation</p>
        <button onClick={handleSubmit}>
          <AiFillCloseCircle />
        </button>
      </div>
      <div>
        <fieldset>
          <div>
            {" "}
            <input type="radio" id="spam" name="reason" value="spam" />
            <label htmlFor="spam">Spam</label>
          </div>

          <div>
            <input type="radio" id="category" name="reason" value="category" />
            <label htmlFor="category">Wrong category</label>
          </div>
          <div>
            <input
              type="radio"
              id="obsolete-notice"
              name="reason"
              value="obsolete-notice"
            />
            <label htmlFor="obsolete-notice">Obsolete notice</label>
          </div>

          <div>
            <input type="radio" id="other" name="reason" value="other" />
            <label htmlFor="other">Other</label>
          </div>
          <div>
            <p>
              In the box below, describe why the advertisement violates our
              rules:
            </p>
            <textarea name="comment" id="comment"></textarea>
          </div>
          <input type="submit" value="Send" onClick={handleSubmit} />
        </fieldset>
      </div>
    </div>
  );
};

export default ReportForm;
