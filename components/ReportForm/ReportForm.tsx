import { ReportFormProps } from "@/types/myTypes";
import { AiFillCloseCircle } from "react-icons/ai";
import styles from "./ReportForm.module.css";

const ReportForm = ({ setReportVisible }: ReportFormProps) => {

  const handleSubmit = () => {
    setReportVisible(false);
  };
  return (
    <div className={styles.reportContainer}>
      <div className={styles.titleReport}>
        <p>report a violation</p>
        <button onClick={() => setReportVisible(false)}>
          <AiFillCloseCircle />
        </button>
      </div>
      <div className={styles.choose}>
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
