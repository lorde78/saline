
type FormuleTagProps = {
    subscription: string;
};

const FormuleTag: React.FC<FormuleTagProps> = ({ subscription }) => {
  
  return (
    <div className="formule_sub">
        <p>{subscription}</p>
    </div>
  );
};

export default FormuleTag;
