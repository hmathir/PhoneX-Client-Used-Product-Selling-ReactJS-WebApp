import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/MainContext';

const SignUp = () => {
    const { emailPassword } = useContext(AuthContext);
    const { register, handleSubmit } = useForm();
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from || '/';

 
    const handleRegister = (data) => {
        toast.loading("Registering...", {
            id: "register"
        })
        if (data.password !== data.confirmPassword) {
            toast.error('Password does not match');
            return;
        }


        emailPassword(data.email, data.password)
            .then(result => {
                delete data.password;
                delete data.confirmPassword;
                data.uid = result.user.uid;
                createUser(data)
            })
            .catch(error => {
                toast.error(error.code);
            })
    };

    const createUser = (data) => {
        fetch('https://phonex.vercel.app/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.remove("register");
                    toast.success("Registered Successfully")
                    navigate(from, { replace: true });
                    window.location.reload();

                } else {
                    toast.remove("register");
                    toast.error(data.message);
                }
            })
    }
    return (
        <div className="max-w-2xl mx-auto bg-white lg:p-16 p-3">
            <form onSubmit={handleSubmit(handleRegister)}>
                <div className="grid gap-6 mb-6 lg:grid-cols-2">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Fist Name</span>
                        </label>
                        <input type="text" placeholder="Fist Name"
                            {...register('firstName')}
                            className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Last Name*</span>
                        </label>
                        <input type="text" placeholder="Last Name"
                            {...register('lastName', { required: true })}
                            className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Company name</span>
                        </label>
                        <input type="text" placeholder="(optional)"
                            {...register('companyName')}
                            className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Phone Number*</span>
                        </label>
                        <input type="number" placeholder="01712345678"
                            {...register('number', { required: true })}
                            className="input input-bordered w-full " />
                    </div>
                </div>
                <div>
                    <label htmlFor="website" className="block mb-2 text-sm font-medium text-gray-900">Select Member</label>
                    <select
                        {...register("role")}
                        defaultValue="buyer"
                        className='bg-gray-50 border mb-2 border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block w-full p-2.5    -500 -500'>
                        <option value="buyer">Buyer</option>
                        <option value="seller">Seller</option>
                    </select>
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Email*</span>
                    </label>
                    <input type="email" placeholder="example@example.com"
                        {...register('email', { required: true })}
                        className="input input-bordered w-full " />
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Password*</span>
                    </label>
                    <input type="password" placeholder="******"
                        {...register('password', { required: true })}
                        className="input input-bordered w-full " />
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Confirm Password*</span>
                    </label>
                    <input type="password" placeholder="******"
                        {...register('confirmPassword', { required: true })}
                        className="input input-bordered w-full " />
                </div>
                <button type="submit" className="text-white bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:outline-none mt-2 focus:ring-pink-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center  -700 -800">Submit</button>
            </form>
            <p className="mt-5">
                Already have an account? <Link to='/login' className="text-pink-600 hover:underline ">Sign in</Link>
            </p>
        </div>

    );
};

export default SignUp;