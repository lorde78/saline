import React from "react";
import "~/styles/tag.css";

type Props = {
    roles: any;
};

export default function Tag({roles}: Props) {
    console.log("job :", roles)
    return (
        <div className="tag">
            {(typeof roles === "string" ? (
                    <p className="role">{roles}</p>
                ) : (
                    (roles ?? []).length !== 0 ? (
                        roles.map((role: any) => {
                            let newRole = role.split('_')[1].charAt(0).toUpperCase() + role.split('_')[1].slice(1).toLowerCase();
                            return <p className="role">{newRole}</p>
                        })
                    ) : (
                        <p className="role">{roles}</p>
                    )
                )
            )}
        </div>
    );
};
  