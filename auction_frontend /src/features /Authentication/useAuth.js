import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createUser, signIn } from '../../services/Auth.Service';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export function useLogin() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const {
    mutate: login,
    error: error,
    isPending: isLoading,
  } = useMutation({
    mutationFn: ({ email, password }) => signIn(email, password),
    onSuccess: (data) => {
      toast.success('Login successful');
      navigate('/dashboard');

      queryClient.setQueryData(['user'], data);
    },

    onError: (error) => {
      toast.error(error.message);
      console.log(error.message);
    },
  });
  return { isLoading, error, login };
}

export function useSignUp() {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const {
    mutate: signup,
    isPending: isLoading,
    error,
  } = useMutation({
    mutationFn: ({ fullName, email, password }) =>
      createUser(fullName, email, password),
    // mutationKey: ['signup'],
    onSuccess: (data) => {
      //toast.success('Signup successful');
      //navigate('/login');
      console.log(data);
      queryClient.setQueryData(['user'], data);
    },
    onError: (error) => {
      //toast.error(error.message);
      console.log('error', error);
    },
  });
  return { signup, isLoading, error };
}
