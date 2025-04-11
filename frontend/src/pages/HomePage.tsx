import { Button } from "@mui/material";
import toast from "react-hot-toast";

const notify = () => toast("Here is your toast.");

export const HomePage = () => {
  return (
    <div>
      <button onClick={notify}>Make me a toast</button>

      <Button variant="contained" onClick={notify}>
        Hello world
      </Button>

      <div>
        HomePage Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Blanditiis delectus amet esse error ipsa exercitationem nam fugit dolore
        explicabo vitae. Veniam consequatur, quae quaerat sequi a mollitia ab
        eum distinctio.
      </div>
    </div>
  );
};
