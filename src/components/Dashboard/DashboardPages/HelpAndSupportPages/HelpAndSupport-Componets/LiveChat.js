import { Input } from '@mui/material';
import { ImAttachment } from 'react-icons/im';
import { CiFaceSmile } from 'react-icons/ci';
import { RiSendPlaneLine } from 'react-icons/ri';

export default function LiveChat() {
  return (
    <div className="boxs bg-white rounded-lg">
      <h1 className="text-2xl font-semibold">Live Chat</h1>

      <div className="h-full w-full">
        {/* chat screen */}
        <div className="chatScreen min-h-[400px]">
          <h1>Chat Screen</h1>
        </div>
        {/* input text area  */}
        <div className="flex border-2 items-center rounded-md gap-4 p-2">
          <Input type="text" className="w-full before:hidden after:hidden px-2 py-1 text-xl" name="query" placeholder="Type a new message here" />
          <ImAttachment className="text-4xl cursor-pointer" />
          <CiFaceSmile className="text-4xl cursor-pointer" />
          <RiSendPlaneLine className="text-4xl rotate-45 mr-5 cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
