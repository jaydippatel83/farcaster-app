"use client"; 
import { useProfile } from '@farcaster/auth-kit';


export const Login = () => { 
    const {
        isAuthenticated,
        profile: { bio, displayName, fid, pfpUrl, username }
    } = useProfile();

    return (
        <div className="flex flex-col items-center justify-center p-4"> 
            <div>
                {isAuthenticated ? (
                    <div className="mt-4 p-4 border rounded-lg shadow">
                        <img
                            src={pfpUrl}
                            alt="Profile"
                            className="w-20 h-20 rounded-full"
                        />
                        <h2 className="text-lg font-semibold mt-2">
                            Hello, {displayName}!
                        </h2>
                        <p className="text-sm">Username: {username}</p>
                        <p className="text-sm">FID: {fid}</p>
                        <p className="text-sm">Bio: {bio}</p>
                    </div>
                ) : (
                    <p className="mt-4">You're not signed in.</p>
                )}
            </div>
        </div>
    );
};