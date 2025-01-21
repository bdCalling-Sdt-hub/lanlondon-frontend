import { ArrowLeft } from 'lucide-react';
import { AiFillInstagram } from 'react-icons/ai';
import { FaFacebookF, FaTiktok, FaYoutube } from 'react-icons/fa';

export default function Details() {
  return (
    <div className=" ">
      {/* Header */}
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-2">
          <button className="hover:bg-gray-100 p-1 rounded-full">
            <ArrowLeft size={20} />
          </button>
          <h1 className="text-xl font-semibold">Campaign Applicants</h1>
        </div>
        <div className="flex gap-2">
          <button className="px-4 py-2 text-sm border border-black text-black rounded-md hover:bg-black hover:text-white">
            Add to Favorite
          </button>
          <button className="px-5 py-1.5 text-sm bg-red-200 text-red-800 rounded-md  font-semibold">
            Decline
          </button>
          <button className="px-6 py-1.5 text-sm bg-primary rounded-md  text-black font-semibold">
            Accept
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className=" bg-white p-6 rounded-xl ">
        {/* Profile Card */} 
        <div className=' w-1/2 border border-gray-300 rounded-xl mb-6'>
        <div className=" rounded-lg p-4 my-2 ">
          <div className=" flex items-center gap-5 px-4"> 
            <div className='w-[30%] '> 
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt="Jason Price"
              className="rounded-full h-[110px] w-[110px]" 
            /> 
            </div>
            <div className=" flex  items-center"> 
                <div className=' border-e-2 border-gray-200 p-4 '>
              <h2 className="text-xl font-medium mb-2">Jason Price</h2>
              <p className="text-gray-600 text-[16px] mb-3 ">
                The point of using Lorem Ipsum is that it has a more-or-less normal distribution
                of letters. Content here, content here, making it look like readable English.
              </p>
                </div>
              <div className="flex flex-col ps-3 gap-4">
                <div className="flex items-center gap-1">
                  <FaFacebookF size={20} className="text-blue-600" />
                  <span className="text-sm font-medium">2.2K</span>
                </div>
                <div className="flex items-center gap-1">
                  <AiFillInstagram size={21} className="text-pink-600" />
                  <span className="text-sm">2.2K</span>
                </div>
                <div className="flex items-center gap-1">
                  <FaYoutube size={22} className="text-red-600" />
                  <span className="text-sm">2.2K</span>
                </div>
                <div className="flex items-center gap-1">
                  <FaTiktok size={20} />
                  <span className="text-sm">2.2K</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>

        {/* Form Grid */}
        <div className="grid grid-cols-2 gap-6">
          <FormField
            label="What is the average age range of your audience?"
            placeholder="12-45 years old"
          />
          <FormField
            label="What is your estimated timeline for content submission?"
            placeholder=""
          />
          <FormField
            label="What percentage of your audience identifies as each gender?"
            placeholder="Female 60%"
          />
          <FormField
            label="How will you promote the brand/product?"
            placeholder=""
          />
          <FormField
            label="Where is the majority of your audience located?"
            placeholder="Los Angeles, Australia, Canada"
          />
          <FormField
            label="Have You Worked on Similar Campaigns Before?"
            placeholder=""
          />
          <FormField
            label="What Platform will you use to promote?"
            placeholder="Instagram, Facebook, Twitter, Youtube"
          />
          <FormField
            label="How will you promote the brand/product?"
            placeholder=""
          />
          <FormField
            label="What type of content can you deliver?"
            placeholder=""
          />
          <FormField
            label="Have You Worked on Similar Campaigns Before?"
            placeholder=""
          />
          <FormField
            label="How many posts can you commit to publishing for this campaign?"
            placeholder=""
          />
          <FormField
            label="Do You Align With the Brand's Values and Messaging?"
            placeholder=""
          />
          <div className="col-start-2">
            <FormField
              label="What is your estimated timeline for content submission?"
              placeholder=""
            />
          </div>
          <div className="col-start-2">
            <FormField
              label="Do you agree to give signature to contractual agreement?"
              placeholder=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

interface FormFieldProps {
  label: string;
  placeholder: string;
}

function FormField({ label, placeholder }: FormFieldProps) {
  return (
    <div>
      <label className="block text-[16px] text-gray-600 mb-1.5">{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        className="w-full px-4 py-2 rounded-md border bg-gray-50 border-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-200"
      />
    </div>
  );
}