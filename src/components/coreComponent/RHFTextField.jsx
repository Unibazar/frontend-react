import TextField from "@mui/material/TextField";
import { useLocation } from "react-router-dom";
import "./rHookFieldContainerStyle.css";
import { Controller } from "react-hook-form";
import PropTypes from "prop-types";

export const RHookTextField = ({
  name,
  label,
  onChange = () => {},
  disabled,
  maxLength = 100,
  method = {},
  onBlur = () => {},
  ...props
}) => {
  const { state } = useLocation();

  const changeCase = (e) => {
    e.preventDefault();
    e.target.value = e.target.value.toUpperCase();
  };


  return (
    <Controller
      control={method.control}
      name={name}
      render={({ field }) => {
        return (
          <TextField
            disabled={state === "viewOnly" || disabled}
            {...field}
            name={name}
            alt={props.alt}
            onChange={changeCase}
            onBlurCapture={(e) => onBlur(e?.target?.value)}
            helperText={method?.formState?.errors?.[name]?.message ?? ""}
            fullWidth
            inputProps={{
              style: {
                textTransform: props?.casetype,
              },
              casetype: props?.casetype,
              maxLength: maxLength,
            }}
            size="small"
            error={!!method?.formState?.errors?.[name]}
            {...method?.register(name)}
            label={label}
            {...props}
          />
        );
      }}
    />
  );
};

RHookTextField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  method: PropTypes.object.isRequired,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  props: PropTypes.any,
  maxLength: PropTypes.number,
  onBlur: PropTypes.func,
};
