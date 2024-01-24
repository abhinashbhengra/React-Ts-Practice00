import { Dispatch, SetStateAction } from "react";

type InputValueType = string | number;

const Box = <T extends InputValueType>({
  label,
  value,
  setValue,
}: {
  label: string;
  value: T;
  setValue: Dispatch<SetStateAction<T>>;
}) => {
  return (
    <form>
      <label>{label}</label>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value as T)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Box;
