import { Operation } from "./Operation";
import { Operation as OperationType } from "../types";

export const Viewer = ({ operations }: { operations: OperationType[] }) => {
  return (
    <div className="py-8">
      <div>Click to go to the operation</div>

      <div className="flex flex-col gap-4 mt-4">
        {operations.map((operation) => (
          <Operation operation={operation} />
        ))}
      </div>
    </div>
  );
};
