import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Button from "./../../../../components/Button";
import FormArea from "./../../../../components/FormArea";
import Input from "./../../../../components/Input";

interface IAddClassFormProps {
  handleClassName: (data: AddClassSchema) => void;
}

const addClassSchema = z.object({
  class: z.string().min(2, {
    message: 'Class must be at least 2 characters long'
  }),
});

export type AddClassSchema = z.infer<typeof addClassSchema>;

const AddClassForm: React.FC<IAddClassFormProps> = ({
  handleClassName,
}) => {
  const { register, handleSubmit, formState: { errors } } =
  useForm<AddClassSchema>({
    resolver: zodResolver(addClassSchema),
  });

  return (
    <FormArea onSubmit={handleSubmit(handleClassName)} headerHeight={100}>
      <h1 className='text-sesi text-2xl text-center font-medium'>New Class!</h1>
      <Input
        label='Name:'
        type='text'
        placeholder='Enter your class name...'
        name='class'
        register={register}
        errors={errors.class}
      />
      <Button theme='sesi'>Register</Button>
    </FormArea>
  );
}

export default AddClassForm;