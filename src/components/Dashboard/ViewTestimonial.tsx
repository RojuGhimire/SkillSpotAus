import { useState } from 'react';
import { MdOutlineDeleteOutline } from 'react-icons/md';
import { FaRegEdit } from 'react-icons/fa';
import Button from '@/components/ui/button';
import { DeleteModal } from '@/Common/DeleteModal';

const iconClass = 'text-xl';
const tableData = 'border-b border-[#eee] py-3 px-4';
const heading = 'py-4 text-xl font-bold text-gray-800 pl-4 p-10 bg-blue-100';

interface Testimonial {
  id: string;
  imageUrl: string;
  author: string;
  description: string;
  position: string;
}

export const ViewTestimonial = () => {
  const [testimonialData, setTestimonialData] = useState<Testimonial[]>([
    {
      id: '1',
      imageUrl: 'https://via.placeholder.com/150',
      author: 'John Doe',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      position: 'CEO',
    },
  ]);

  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);

  const handleDelete = (id: string) => {
    setSelectedItemId(id);
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    setTestimonialData(testimonialData.filter((item) => item.id !== selectedItemId));
    setIsDeleteModalOpen(false);
  };

  const handleEdit = (id: string) => {
    console.log(`Navigating to edit page for testimonial ID: ${id}`);
  };

  return (
    <>
      <div className="ml-60 px-5 pt-6 pb-2.5">
        
        <div className="flex justify-end mb-10">
          <Button type="button" variant="secondary" onClick={() => console.log("Add Testimonial")}>
            Add
          </Button>
        </div>
        <div className="rounded-sm bg-white shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
          <div className="overflow-x-auto border border-gray-100">
            <table className="w-full table-auto border-collapse">
              <thead>
                <tr className="bg-gray-200 text-left">
                  <th className={heading}>Image</th>
                  <th className={heading}>Author Name</th>
                  <th className={heading}>Description</th>
                  <th className={heading}>Position</th>
                  <th className={heading}>Action</th>
                </tr>
              </thead>
              <tbody>
                {testimonialData.length > 0 ? (
                  testimonialData.map((testimonial, key) => (
                    <tr key={key} className={key % 2 === 0 ? 'bg-gray-100' : ''}>
                      <td className={tableData}>
                        <img
                          alt="testimonial"
                          src={testimonial.imageUrl}
                          className="h-20 w-20 object-cover border border-gray-100"
                        />
                      </td>
                      <td className={tableData}>
                        <p className="text-black text-xl">{testimonial.author}</p>
                      </td>
                      <td className={tableData}>
                        <p className="text-black text-xl">{testimonial.description.slice(0, 50)}</p>
                      </td>
                      <td className={tableData}>
                        <p className="text-black text-xl">{testimonial.position}</p>
                      </td>
                      <td className={tableData}>
                        <div className="flex items-center space-x-3.5">
                          <span className="hover:text-primary cursor-pointer">
                            <FaRegEdit
                              className={iconClass}
                              onClick={() => handleEdit(testimonial.id)}
                            />
                          </span>
                          <span
                            className="hover:text-primary cursor-pointer"
                            onClick={() => handleDelete(testimonial.id)}
                          >
                            <MdOutlineDeleteOutline className={iconClass} />
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td className="text-center py-5" colSpan={5}>
                      No data available
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        <DeleteModal
          isModalOpen={isDeleteModalOpen}
          closeModal={() => setIsDeleteModalOpen(false)}
          titleName={`Testimonial item ${selectedItemId}`}
          handleDelete={confirmDelete}
        />
      </div>
    </>
  );
};
