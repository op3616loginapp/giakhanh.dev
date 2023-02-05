"use client";

import {
  IconBrandHipchat,
  IconCheck,
  IconDots,
  IconLogout,
  IconPaperclip,
  IconQuestionCircle,
  IconThumbUp,
  IconUser,
} from "@tabler/icons-react";

import { Menu, Transition } from "@headlessui/react";
import { signIn, signOut } from "next-auth/react";
import { useState, Fragment } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";
import toast from "react-hot-toast";
import dayjs from "dayjs";
import ReactTextareaAutosize from "react-textarea-autosize";

const attachments = [
  { name: "resume_front_end_developer.pdf", href: "#" },
  { name: "coverletter_front_end_developer.pdf", href: "#" },
];
const eventTypes = {
  applied: { icon: IconUser, bgColorClass: "bg-gray-400" },
  advanced: { icon: IconThumbUp, bgColorClass: "bg-blue-500" },
  completed: { icon: IconCheck, bgColorClass: "bg-green-500" },
};
const timeline = [
  {
    id: 1,
    type: eventTypes.applied,
    content: "Applied to",
    target: "Front End Developer",
    date: "Sep 20",
    datetime: "2020-09-20",
  },
];

const submitMessage = async (
  content: string,
  refresh: () => void,
  onSuccess?: () => void,
  onDone?: () => void
) => {
  const loading = toast.loading("Signing");

  const res = await fetch("/api/guestbook", {
    body: JSON.stringify({
      body: content,
    }),
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
  });

  if (!res.ok) {
    toast.dismiss(loading);
    toast.error(await res.text());
    typeof onDone === "function" && onDone();

    return;
  }

  refresh();
  typeof onSuccess === "function" && onSuccess();
  typeof onDone === "function" && onDone();

  toast.dismiss(loading);
  toast.success("Added successfully");
};

const deleteMessage = async (id: string, refresh: () => void) => {
  const loading = toast.loading("Deleting");

  const res = await fetch(`/api/guestbook/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) {
    toast.dismiss(loading);
    toast.error("Thao tác không thành công. Vui lòng thử lại!");

    return;
  }

  refresh();

  toast.dismiss(loading);
  toast.success("Deleted successfully");
};

const StackedCardProfile = ({ comments, user }) => {
  const [value, setValue] = useState("");
  const [loading, setLoading] = useState(false);
  const { refresh } = useRouter();

  return (
    <>
      <div className="md:flex md:items-center md:justify-between">
        <div className="flex items-center space-x-5">
          <div className="flex-shrink-0">
            <div className="relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="h-16 w-16 rounded-full object-cover"
                src="/static/images/avatar-profile.jpeg"
                alt=""
              />
              <span
                className="absolute inset-0 rounded-full shadow-inner"
                aria-hidden="true"
              />
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-secondary">Khanh Le</h1>
            <p className="text-sm font-medium text-accent-600">
              Applied for{" "}
              <a href="" className="text-secondary">
                Software Engineer
              </a>{" "}
              on <time dateTime="2020-08-25">August 25, 2020</time>
            </p>
          </div>
        </div>
        <div className="justify-stretch mt-6 flex flex-col-reverse space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-y-0 sm:space-x-3 sm:space-x-reverse md:mt-0 md:flex-row md:space-x-3">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-100"
          >
            Contact
          </button>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-100"
          >
            Advance to offer
          </button>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-flow-col-dense lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2 lg:col-start-1">
          {/* Description list*/}
          <section aria-labelledby="applicant-information-title">
            <div className="shadow dark:bg-slate-800 sm:rounded-lg">
              <div className="px-4 py-5 sm:px-6">
                <h2
                  id="applicant-information-title"
                  className="text-lg font-medium leading-6 text-secondary"
                >
                  Applicant Information
                </h2>
                <p className="mt-1 max-w-2xl text-sm text-accent-600">
                  Personal details and application.
                </p>
              </div>
              <div className="border-t border-accent-200 px-4 py-5 sm:px-6">
                <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-accent-600">
                      Application for
                    </dt>
                    <dd className="mt-1 text-sm text-secondary">
                      Fullstack Developer
                    </dd>
                  </div>
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-accent-600">
                      Email address
                    </dt>
                    <dd className="mt-1 text-sm text-secondary">
                      op3616@gmail.com
                    </dd>
                  </div>
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-accent-600">
                      Salary expectation
                    </dt>
                    <dd className="mt-1 text-sm text-secondary">$1</dd>
                  </div>
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-accent-600">
                      Phone
                    </dt>
                    <dd className="mt-1 text-sm text-secondary">
                      +84903046492
                    </dd>
                  </div>
                  <div className="sm:col-span-2">
                    <dt className="text-sm font-medium text-accent-600">
                      About
                    </dt>
                    <dd className="mt-1 text-sm text-secondary">
                      I have a passion for all thing{" "}
                      <span className="font-semibold">Javascript</span>. I enjoy
                      building eCommerce software and stuff related to web dev.
                      I work mainly with{" "}
                      <span className="font-semibold">Typescript</span>,{" "}
                      <span className="font-semibold">React</span>,{" "}
                      <span className="font-semibold">Node</span>,{" "}
                      <span className="font-semibold">Remix</span>, and{" "}
                      <span className="font-semibold">NextJS</span>.
                    </dd>
                  </div>
                  <div className="sm:col-span-2">
                    <dt className="text-sm font-medium text-accent-600">
                      Attachments
                    </dt>
                    <dd className="mt-1 text-sm text-secondary">
                      <ul
                        role="list"
                        className="divide-y divide-accent-200 rounded-md border border-accent-200 dark:border-accent-400"
                      >
                        {attachments.map((attachment) => (
                          <li
                            key={attachment.name}
                            className="flex items-center justify-between py-3 pl-3 pr-4 text-sm"
                          >
                            <div className="flex w-0 flex-1 items-center">
                              <IconPaperclip
                                className="h-5 w-5 flex-shrink-0 text-accent-400"
                                aria-hidden="true"
                              />
                              <span className="ml-2 w-0 flex-1 truncate">
                                {attachment.name}
                              </span>
                            </div>
                            <div className="ml-4 flex-shrink-0">
                              <a
                                href={attachment.href}
                                className="font-medium text-blue-600 hover:text-blue-500"
                              >
                                Download
                              </a>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </dd>
                  </div>
                </dl>
              </div>
              <div>
                <Link
                  href="/resume"
                  className="block bg-gray-50 px-4 py-4 text-center text-sm font-medium text-gray-500 hover:text-gray-700 dark:bg-gray-50/10 dark:text-white hover:dark:text-white/90 sm:rounded-b-lg"
                >
                  Read full application
                </Link>
              </div>
            </div>
          </section>

          {/* Comments*/}
          <section aria-labelledby="notes-title">
            <div className="bg-white shadow dark:bg-slate-800 sm:overflow-hidden sm:rounded-lg">
              <div className="divide-y divide-accent-200">
                <div className="px-4 py-5 sm:px-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <IconBrandHipchat />
                      <h2
                        id="notes-title"
                        className="text-lg font-medium text-secondary"
                      >
                        Comments
                      </h2>
                    </div>
                    {user && (
                      <IconLogout
                        className="cursor-pointer"
                        onClick={() => signOut()}
                      />
                    )}
                  </div>
                </div>
                <div className="px-4 py-6 sm:px-6">
                  <ul role="list" className="space-y-8">
                    {comments.map((comment) => (
                      <li key={comment.id}>
                        <div className="relative flex space-x-3">
                          <div className="flex-shrink-0">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              className="h-10 w-10 rounded-full"
                              src={comment.image}
                              alt=""
                            />
                          </div>
                          <div>
                            <div className="text-sm">
                              <a
                                href="#"
                                className="font-medium text-accent-600"
                              >
                                {comment.created_by}
                              </a>
                            </div>
                            <div className="mt-1 text-sm text-secondary">
                              <p>{comment.body}</p>
                            </div>
                            <div className="mt-2 space-x-2 text-sm">
                              <span className="font-medium text-gray-500">
                                {dayjs(comment.updated_at).format(
                                  "MMMM DD, YYYY"
                                )}
                              </span>
                            </div>
                          </div>
                          {user && comment.created_by === user.name && (
                            <div className="absolute top-0 right-0">
                              <Menu
                                as="div"
                                className="relative inline-block text-left"
                              >
                                <div>
                                  <Menu.Button className="flex items-center text-gray-400 hover:text-gray-600 focus:outline-none">
                                    <span className="sr-only">
                                      Open options
                                    </span>
                                    <IconDots
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  </Menu.Button>
                                </div>

                                <Transition
                                  as={Fragment}
                                  enter="transition ease-out duration-100"
                                  enterFrom="transform opacity-0 scale-95"
                                  enterTo="transform opacity-100 scale-100"
                                  leave="transition ease-in duration-75"
                                  leaveFrom="transform opacity-100 scale-100"
                                  leaveTo="transform opacity-0 scale-95"
                                >
                                  <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <div className="py-1">
                                      <Menu.Item>
                                        {({ active }) => (
                                          <div
                                            onClick={() =>
                                              deleteMessage(comment.id, refresh)
                                            }
                                            className={clsx(
                                              active
                                                ? "bg-gray-100 text-gray-900"
                                                : "text-gray-700",
                                              "block cursor-pointer px-4 py-2 text-sm"
                                            )}
                                          >
                                            Delete
                                          </div>
                                        )}
                                      </Menu.Item>
                                    </div>
                                  </Menu.Items>
                                </Transition>
                              </Menu>
                            </div>
                          )}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-6 dark:bg-gray-50/10 sm:px-6">
                {!user && (
                  <div className="flex items-center overflow-hidden">
                    <button
                      className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none"
                      onClick={() => signIn()}
                    >
                      Login
                    </button>
                    <span className="ml-2 overflow-hidden text-ellipsis whitespace-nowrap">
                      to continue leaving a message
                    </span>
                  </div>
                )}
                {user && (
                  <div className="flex space-x-3">
                    <div className="flex-shrink-0">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        className="h-10 w-10 rounded-full"
                        src={user.image}
                        alt=""
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <form action="#">
                        <div>
                          <label htmlFor="comment" className="sr-only">
                            About
                          </label>
                          <ReactTextareaAutosize
                            id="comment"
                            name="comment"
                            minRows={3}
                            className="w-full flex-1 rounded-md border border-accent-200 bg-primary py-2 px-3 transition-colors duration-200 ease-linear focus:border-accent-500 focus:outline-none"
                            placeholder="Let me know what you think"
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                          />
                        </div>
                        <div className="mt-3 flex items-center justify-between">
                          <a
                            href="#"
                            className="group inline-flex items-start space-x-2 text-sm text-gray-500 hover:text-gray-500/80"
                          >
                            <IconQuestionCircle
                              className="h-5 w-5 flex-shrink-0 text-gray-500 group-hover:text-gray-500/80"
                              aria-hidden="true"
                            />
                            <span>Some HTML is okay.</span>
                          </a>
                          <button
                            type="submit"
                            className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none"
                            onClick={() => {
                              setLoading(true);
                              submitMessage(
                                value,
                                refresh,
                                () => setValue(""),
                                () => setLoading(false)
                              );
                            }}
                            disabled={loading}
                          >
                            Comment
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        </div>

        <section
          aria-labelledby="timeline-title"
          className="lg:col-span-1 lg:col-start-3"
        >
          <div className="bg-white px-4 py-5 shadow dark:bg-slate-800 sm:rounded-lg sm:px-6">
            <h2
              id="timeline-title"
              className="text-lg font-medium text-secondary"
            >
              Timeline
            </h2>

            {/* Activity Feed */}
            <div className="mt-6 flow-root">
              <ul role="list" className="-mb-8">
                {timeline.map((item, itemIdx) => (
                  <li key={item.id}>
                    <div className="relative pb-8">
                      {itemIdx !== timeline.length - 1 ? (
                        <span
                          className="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                          aria-hidden="true"
                        />
                      ) : null}
                      <div className="relative flex items-center space-x-3">
                        <div>
                          <span
                            className={clsx(
                              item.type.bgColorClass,
                              "flex h-8 w-8 items-center justify-center rounded-full ring-8 ring-white"
                            )}
                          >
                            <item.type.icon
                              className="h-5 w-5 text-white"
                              aria-hidden="true"
                            />
                          </span>
                        </div>
                        <div className="!ml-4 flex min-w-0 flex-1 justify-between space-x-4">
                          <div>
                            <p className="text-sm text-gray-500 dark:text-gray-200">
                              {item.content}{" "}
                              <a
                                href="#"
                                className="font-medium text-gray-900 dark:text-gray-400"
                              >
                                {item.target}
                              </a>
                            </p>
                          </div>
                          <div className="whitespace-nowrap text-right text-sm text-gray-500 dark:text-gray-500">
                            <time dateTime={item.datetime}>{item.date}</time>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="justify-stretch mt-6 flex flex-col">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Advance to offer
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default StackedCardProfile;
