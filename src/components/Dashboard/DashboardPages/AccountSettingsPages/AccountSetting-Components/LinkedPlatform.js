import Image from 'next/image';
import amazonLogo from '../../../../../assets/unibazar-home-images/amazon-logo.png';
import flipkartLogo from '../../../../../assets/unibazar-home-images/flipkart-logo.png';
import myntraLogo from '../../../../../assets/unibazar-home-images/myntra-full-logo.png';
import { Checkbox, FormControlLabel, TextField } from '@mui/material';
import { FaLink } from 'react-icons/fa';

export default function LinkedPlatform() {
  return (
    <form className='px-7'>
      {/* platform Logos */}
      <div className="flex gap-4 w-full items-center flex-wrap">
        <div className="w-32">
          <Image src={amazonLogo} width="auto" height="auto" alt="amazon logo" className="object-contain w-full h-full" />
        </div>
        <div className="w-32">
          <Image src={flipkartLogo} width="auto" height="auto" alt="flipkart logo" className="object-contain w-full h-full" />
        </div>
        <div className="w-32">
          <Image src={myntraLogo} width="auto" height="auto" alt="myntra logo" className="object-contain w-full h-full" />
        </div>
      </div>

      {/* url textbox */}
      <div className=" mt-7">
        <h1 className="font-semibold mb-1">Url</h1>
        <TextField required id="outlined-basic" label="Url" variant="outlined" className="w-full md:w-1/3" />
      </div>

      {/* social media links  */}
      <div className=" mt-7 space-y-4">
        <h1 className="font-semibold mb-1">Social Accounts</h1>
        <div className="flex items-center gap-5">
          <FaLink />
          <TextField required id="outlined-basic" label="Link to social profile" variant="outlined" className="w-full md:w-1/2" />
        </div>
        <div className="flex items-center gap-5">
          <FaLink />
          <TextField required id="outlined-basic" label="Link to social profile" variant="outlined" className="w-full md:w-1/2" />
        </div>
        <div className="flex items-center gap-5">
          <FaLink />
          <TextField required id="outlined-basic" label="Link to social profile" variant="outlined" className="w-full md:w-1/2" />
        </div>
        <div className="flex items-center gap-5">
          <FaLink />
          <TextField required id="outlined-basic" label="Link to social profile" variant="outlined" className="w-full md:w-1/2" />
        </div>
      </div>

      {/* location textbox  */}
      <div className="mt-7 w-full md:w-3/5">
        <h1 className="font-semibold mb-1">Location</h1>
        <TextField required id="outlined-basic" label="Location" variant="outlined" className="w-full" placeholder="Noida , Delhi" />
        <p className="text-sm mt-2">
          All of the fields on this page are optional and can be deleted at any time, and by filling them out, you're giving us consent to share this data wherever your user profile appears. Please see our <span className="text-blue-500">privacy statement</span> to learn more about how we use this information.
        </p>
      </div>

      {/* checkbox div */}
      <div className="mt-4">
        <FormControlLabel control={<Checkbox defaultChecked />} label="Display Current Local Time" />
        <p className="text-sm p-0 m-0 leading-none">Other users will see the time difference from their local time </p>
      </div>



      <button className="py-2 px-4 bg-[#08A9A0] text-white rounded-lg mt-7 uppercase" type='submit'>Update </button>
      
    </form>
  );
}
