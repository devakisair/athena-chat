import { Form } from "@athena/forge";
import { Root } from "@athena/forge";
import "@athena/forge/dist/forge.css";
import { Textarea } from "@athena/forge";
import { FormField, FormFieldLayout } from "@athena/forge";

export function App() {
  return (
    <Root>
      <h1>Chat</h1>
      <Form>
        <FormField labelText="Message" id="message" inputAs={Textarea} />
      </Form>
    </Root>
  );
}
