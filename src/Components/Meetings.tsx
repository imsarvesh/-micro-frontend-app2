import { format, isSameDay, parseISO, startOfToday } from "date-fns";

import { useEffect, useState } from "react";
import { getMeetings } from "src/service/request";

export default function Meetings() {
  let today = startOfToday();
  let [selectedDay, setSelectedDay] = useState<typeof today | undefined>(today);

  const [meetings, setMeetings] = useState<
    { id: string; startDatetime: string; endDatetime: string }[]
  >([]);

  const allEventsHandler = () => {
    setSelectedDay(undefined);
  };

  useEffect(() => {
    getMeetings().then(setMeetings);

    // @ts-ignore
    window.addEventListener("SELECTED_DAY", ({ detail }) => {
      setSelectedDay(detail.selectedDay);
    });

    return () => {
      // event.unsubscribe('ADD_TO_CART', listener);
    };
  }, []);

  let selectedDayMeetings = selectedDay
    ? meetings.filter((meeting) =>
        isSameDay(parseISO(meeting.startDatetime), selectedDay!)
      )
    : meetings;

  return (
    <section className="mt-12 md:mt-0 md:pl-14">
      <h2 className="font-semibold text-gray-900">
        Schedule for{" "}
        {selectedDay && (
          <time dateTime={format(selectedDay, "yyyy-MM-dd")}>
            {format(selectedDay, "MMM dd, yyy")}
          </time>
        )}
        <button
          style={{
            marginLeft: "20px",
            border: "1px solid black",
            padding: "10px",
            borderRadius: "10px",
          }}
          onClick={allEventsHandler}
        >
          All Events
        </button>
      </h2>
      <ol className="mt-4 space-y-1 text-sm leading-6 text-gray-500">
        {selectedDayMeetings.length > 0 ? (
          selectedDayMeetings.map((meeting) => (
            <Meeting meeting={meeting} key={meeting.id} />
          ))
        ) : (
          <p>No meetings for today.</p>
        )}
      </ol>
    </section>
  );
}
function Meeting({ meeting }) {
  let startDateTime = parseISO(meeting.startDatetime);
  let endDateTime = parseISO(meeting.endDatetime);

  const onEventHandle = () => {
    const selectedMeeting = new CustomEvent("SELECTED_MEETING", {
      detail: { selectedMeeting: meeting },
    });
    window.dispatchEvent(selectedMeeting);
  };

  return (
    <li
      onClick={onEventHandle}
      className="flex items-center px-4 py-2 space-x-4 group rounded-xl focus-within:bg-gray-100 hover:bg-gray-100"
    >
      <img
        src={meeting?.user.avatar}
        alt=""
        className="flex-none w-10 h-10 rounded-full"
      />
      <div className="flex-auto">
        <p className="text-gray-900">{meeting.user.name}</p>
        <p className="mt-0.5">
          <time dateTime={meeting.startDatetime}>
            {format(startDateTime, "h:mm a")}
          </time>{" "}
          -{" "}
          <time dateTime={meeting.endDatetime}>
            {format(endDateTime, "h:mm a")}
          </time>
        </p>
      </div>
    </li>
  );
}
