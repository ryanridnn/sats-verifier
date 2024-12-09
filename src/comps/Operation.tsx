import { Details, type Operation as OperationType } from "../types";

const getLink = (details: Details) => {
  const { networkId, siteId, departmentId, workAreaId, _id } = details;

  return `https://app.didge.io/admin/networks/${networkId}/sites/${siteId}/departments/${departmentId}?waId=${workAreaId}&opId=${_id}`;
};

export const Operation = ({ operation }: { operation: OperationType }) => {
  return (
    <a
      className="w-full gap-2 text-blue-100 mt-1"
      target="_blank"
      href={getLink(operation.details)}
    >
      <div
        className={`w-full rounded-lg p-4 ${operation.result.overall === "fatal" ? "bg-red-500" : operation.result.overall === "warning" ? "bg-yelloe-500" : "bg-slate-700"}`}
      >
        <h2 className="font-semibold text-lg">
          {operation.details.departmentTitle} -{" "}
          {operation.details.workAreaTitle} - {operation.details.title}
        </h2>

        {operation.result.messages.length > 0 && (
          <div className="mt-2 text-sm flex flex-col gap-1">
            {operation.result.messages.map((message, index) => (
              <div className="" key={index}>
                {message}
              </div>
            ))}
          </div>
        )}

        {operation.result.messages.length === 0 &&
          operation.result.overall === "good" && (
            <div className="">
              <div>All Good</div>
            </div>
          )}
      </div>
    </a>
  );
};
