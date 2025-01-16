

interface ITableHeaderProps {
  col1: string;
  col2: string;
  col3: string;
}

const TableHeader: React.FC<ITableHeaderProps> = ({
  col1,
  col2,
  col3
}) => {
  return (
    <thead>
      <tr>
        <th className="py-2">{col1}</th>
        <th className="py-2">{col2}</th>
        <th className="py-2">{col3}</th>
      </tr>
    </thead>
  );
};

export default TableHeader;
