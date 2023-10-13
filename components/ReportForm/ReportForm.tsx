import { LabelProps, ReportFormProps } from "@/types/myTypes";
import { useState, ChangeEvent } from "react";
import { AiFillCloseCircle } from "react-icons/ai";

// Label component to display radio button options
const Label = ({ title, value }: LabelProps) => {
  return (
    <label>
      <input type="radio" name="reason" value={value} className="mr-4" />
      {title}
    </label>
  );
};

const ReportForm = ({ setReportVisible, reportVisible }: ReportFormProps) => {
  const [comment, setComment] = useState("");
  // Handle form submission
  const handleSubmit = () => {
    setReportVisible(false);
  };
  // Handle changes in the comment textarea
  const handleCommentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  return (
    <div
      className={`fixed w-3/4 h-fit shadow-lg max-w-md rounded-md z-10 bg-slate-200 top-1/2 left-1/2 -translate-y-1/2 transition-all  border-2 border-black duration-300 ease-in delay-150 ${
        reportVisible
          ? "-translate-x-1/2 opacity-100"
          : "-translate-x-[200%] opacity-0"
      }`}
    >
      <div className="flex justify-between items-center p-2 h-fit">
        <h3 className="font-medium">Report a violation</h3>
        <button onClick={handleSubmit}>
          <AiFillCloseCircle className="w-8 h-8 text-main" />
        </button>
      </div>
      <>
        <fieldset className="flex flex-row flex-wrap text-left p-4 h-auto">
          <div className="flex flex-col flex-nowrap">
            <Label value="spam" title="Spam" />
            <Label value="category" title="Wrong category" />
            <Label value="absolete-notice" title="Obsolete notice" />
            <Label value="other" title="Other" />
          </div>
          <p className="my-4">
            In the box below, describe why the advertisement violates our rules:
          </p>
          <div className="text-center w-full">
            <textarea
              name="comment"
              id="comment"
              className="w-11/12 max-w-80 h-20 resize-none"
              maxLength={100}
              onChange={handleCommentChange}
            ></textarea>
            <p className="text-xs">{comment.length} / 100</p>
          </div>
          <input
            type="submit"
            value="Send"
            onClick={handleSubmit}
            className="h-fit bg-main py-4 px-8 text-white m-auto rounded-md font-medium mt-4"
          />
        </fieldset>
      </>
    </div>
  );
};

export default ReportForm;
