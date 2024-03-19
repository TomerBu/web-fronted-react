import { useForm } from "react-hook-form";
import { RegisterUser } from "../@types/types";
import patterns from "../validation/patterns";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterUser>();

  const onRegister = (data: RegisterUser) => {
    console.log(data);
  };

  return (
    <div className="register-container">
      <h2 className="text-4xl mb-5 text-center">Register</h2>
      <form noValidate onSubmit={handleSubmit(onRegister)}>
        <input
          placeholder="First Name"
          type="text"
          {...register("name.first", {
            required: "This field is mandatory",
            minLength: { value: 2, message: "Too short" },
            maxLength: { value: 255, message: "Too long" },
          })}
        />
        {errors.name?.last && (
          <p className="text-red-500">{errors.name?.first?.message}</p>
        )}

        {/* middle */}
        <input
          placeholder="Middle Name"
          type="text"
          {...register("name.middle", {
            minLength: { value: 2, message: "Too short" },
            maxLength: { value: 255, message: "Too long" },
          })}
        />
        {errors.name?.middle && (
          <p className="text-red-500">{errors.name?.middle?.message}</p>
        )}

        {/* last */}
        <input
          placeholder="Last Name"
          type="text"
          {...register("name.last", {
            required: "This field is mandatory",
            minLength: { value: 2, message: "Too short" },
            maxLength: { value: 255, message: "Too long" },
          })}
        />
        {errors.name?.last && (
          <p className="text-red-500">{errors.name?.last?.message}</p>
        )}

        {/* phone */}
        <input
          placeholder="Phone"
          type="tel"
          {...register("phone", {
            required: "This field is mandatory",
            minLength: { value: 9, message: "Too short" },
            maxLength: { value: 14, message: "Too long" },
          })}
        />
        {errors.phone && (
          <p className="text-red-500">{errors.phone?.message}</p>
        )}

        <input
          placeholder="Email"
          type="email"
          {...register("email", {
            required: "This field is mandatory",
            pattern: {
              value: patterns.email,
              message: "Invalid email",
            },
          })}
        />
        {errors.email && (
          <p className="text-red-500">{errors.email?.message}</p>
        )}

        {/* password */}
        <input
          placeholder="Password"
          type="password"
          {...register("password", {
            required: "This field is mandatory",
            pattern: {
              value: patterns.password,
              message:
                "Password must be at least 9 characters long and contain an uppercase letter, a lowercase letter, a number and one of the following characters !@#$%^&*-",
            },
          })}
        />
        {errors.password && (
          <p className="text-red-500">{errors.password?.message}</p>
        )}

        {/* image.url */}
        <input
          placeholder="Image URL"
          type="url"
          {...register("image.url", {
            pattern: {
              value: patterns.url,
              message: "Invalid image URL",
            },
          })}
        />
        {errors.image?.url && (
          <p className="text-red-500">{errors.image?.url?.message}</p>
        )}

        <input
          placeholder="Image Description"
          type="text"
          {...register("image.alt", {
            minLength: { value: 2, message: "Too short" },
            maxLength: { value: 255, message: "Too long" },
          })}
        />
        {errors.image?.alt && (
          <p className="text-red-500">{errors.image?.alt?.message}</p>
        )}

        {/* address.state */}
        <input
          placeholder="State"
          type="text"
          {...register("address.state", {
            minLength: { value: 2, message: "Too short" },
            maxLength: { value: 255, message: "Too long" },
          })}
        />
        {errors.address?.state && (
          <p className="text-red-500">{errors.address?.state?.message}</p>
        )}

        {/* address.country */}
        <input
          placeholder="Country"
          type="text"
          {...register("address.country", {
            required: "This field is mandatory",
            minLength: { value: 2, message: "Too short" },
            maxLength: { value: 255, message: "Too long" },
          })}
        />
        {errors.address?.country && (
          <p className="text-red-500">{errors.address?.country?.message}</p>
        )}
        {/* address.city */}
        <input
          placeholder="City"
          type="text"
          {...register("address.city", {
            required: "This field is mandatory",
            minLength: { value: 2, message: "Too short" },
            maxLength: { value: 255, message: "Too long" },
          })}
        />
        {errors.address?.city && (
          <p className="text-red-500">{errors.address?.city?.message}</p>
        )}

        {/* address.street */}
        <input
          placeholder="Street"
          type="text"
          {...register("address.street", {
            required: "This field is mandatory",
            minLength: { value: 2, message: "Too short" },
            maxLength: { value: 255, message: "Too long" },
          })}
        />
        {errors.address?.street && (
          <p className="text-red-500">{errors.address?.street?.message}</p>
        )}

        {/* address.houseNumber */}
        <input
          placeholder="House Number"
          type="number"
          {...register("address.houseNumber", {
            required: "This field is mandatory",
            min: { value: 2, message: "Too small" },
            max: { value: 256, message: "Too big" },
          })}
        />
        {errors.address?.houseNumber && (
          <p className="text-red-500">{errors.address?.houseNumber?.message}</p>
        )}

        {/* address.zip */}
        <input
          placeholder="Zip"
          type="number"
          {...register("address.zip", {
            required: "This field is mandatory",
            min: { value: 2, message: "Too small" },
            max: { value: 256, message: "Too big" },
          })}
        />
        {errors.address?.zip && (
          <p className="text-red-500">{errors.address?.zip?.message}</p>
        )}

        <label htmlFor="isBusiness">Business</label>
        <input
          id="isBusiness"
          type="checkbox"
          {...register("isBusiness", {
            required: "This field is mandatory",
          })}
        />
        {errors.isBusiness && (
          <p className="text-red-500">{errors.isBusiness?.message}</p>
        )}
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
