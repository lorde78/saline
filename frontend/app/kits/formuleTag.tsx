
type Props = {
    subscription: string;
};

export default function FormuleTag ({ subscription }:Props) {
  
  return (
    <div className="formule_sub">
        <p>{subscription}</p>
    </div>
  );
};
