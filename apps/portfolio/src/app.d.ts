/// <reference types="@sveltejs/kit" />

declare namespace App {
  // interface Locals {}
  // interface Platform {}
  // interface Session {}
  // interface Stuff {}
}

declare module "*.md" {
  const value: import("$lib/types").PostMeta;
  export default value;
}
