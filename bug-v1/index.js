import { isMainThread, Worker } from "worker_threads";

if (isMainThread) {
  console.log("main thread started");
  // When run via debugger should run correctly. When a breakpoint is set on any line (in any open project on VScode) the debugger pauses indefinitely when the worker process is triggered.
  new Worker("./index.js");
  console.log("main thread finished");
} else {
  console.log("--Worker--");
  console.log("child thread finished");
}
