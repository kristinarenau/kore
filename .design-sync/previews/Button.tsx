import { Button } from "the-kore-ui";

export const Primary = () => <Button href="/contact">Let&rsquo;s Talk</Button>;

export const Secondary = () => (
  <Button href="/work" variant="secondary">
    View all work
  </Button>
);

export const AsSubmitButton = () => (
  <Button type="submit" disabled={false}>
    Send Message
  </Button>
);

export const Disabled = () => (
  <Button type="submit" disabled>
    Sending...
  </Button>
);
