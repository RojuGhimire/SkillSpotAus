import Button from '@/components/ui/button';
import Modal from './Modal';

interface DeleteModalProps {
  isModalOpen: boolean;
  closeModal: () => void;
  titleName: string;
  handleDelete: () => void;
}

export const DeleteModal: React.FC<DeleteModalProps> = ({
  isModalOpen,
  closeModal,
  titleName,
  handleDelete,
}) => {
  return (
    <Modal isOpen={isModalOpen} setIsOpen={closeModal}>
      <div className="flex items-center justify-between py-3 mx-3 bg-gray-200/30 bg-opacity-80">
        <h1>{`Are you sure you want to delete ${titleName}?`}</h1>
      </div>
      <div className="flex justify-end gap-5 px-5 py-2">
        <Button className="font-bold border rounded px-8 bg-red-500 text-center text-white h-[50px] -z-1" onClick={closeModal}>
          Cancel
        </Button>
        <Button className="font-bold border rounded px-8 bg-blue-500 text-center text-white h-[50px] -z-1" onClick={handleDelete}>
          Yes
        </Button>
      </div>
    </Modal>
  );
};
