import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import FormArea from '.';
import { LoginUserSchema } from '@/app/login/login-form';


describe('Form Area', () => {
  it('should render the form area', () => {
    // Arrange
    const handleLoginUser = (data: LoginUserSchema) => {
      console.log(data.password);
      console.log(data.user);
    }
    render(<FormArea onSubmit={handleLoginUser} backgroundImage={''} headerHeight={0}><p>Form Area</p></FormArea>);

    // Act
    const formArea = screen.getByText('Form Area');

    // Assert
    expect(formArea).toBeVisible();
  });
});
