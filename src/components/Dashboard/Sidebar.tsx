import { Dashboard_sidebar_links } from '../../Common';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';

const linkClasses =
  'flex items-center gap-8 text-black font-normal px-3 py-3 hover:bg-blue-300 hover:no-underline';

export const Sidebar = () => {
  return (
    <div className='flex flex-col h-screen p-3 w-60 text-black shadow-sm bg-gray-800 opacity-100'>
      <div className='flex items-center px-1 py-10 text-white text-xl font-bold'>
        Skill Spot Australia
      </div>
      <div className='flex-1 mt-4 overflow-y-scroll py-2 flex-col gap-2 custom-scrollbar'>
        {Dashboard_sidebar_links.map((item) => (
          <SidebarLink key={item.key} item={item} />
        ))}
      </div>
    </div>
  );
};

// Define the SidebarLink component with proper types
interface SidebarLinkProps {
  item: {
    key: string;
    path: string;
    icon: JSX.Element;
    label: string;
  };
}

function SidebarLink({ item }: SidebarLinkProps) {
  const { pathname } = useLocation();
  return (
    <Link
      to={item.path}
      className={classNames(
        pathname === item.path ? 'text-blue-400 bg-blue-500' : 'text-white',
        linkClasses
      )}
    >
      <span className='text-[28px] text-white'>{item.icon}</span>
      <span className='text-[18px]'>{item.label}</span>
    </Link>
  );
}
