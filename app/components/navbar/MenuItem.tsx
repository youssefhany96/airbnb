'use client';

interface MenuItemProps {
  onClick?: () => void;
  label: string;
  icon?: React.FC;
}

const MenuItem: React.FC<MenuItemProps> = ({ label, icon: Icon, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="px-4 py-3 hover:bg-neutral-100 cursor-pointer transition font-semibold"
    >
      {Icon && <Icon />}
      <div className="font-semibold">{label}</div>
    </div>
  );
};

export default MenuItem;