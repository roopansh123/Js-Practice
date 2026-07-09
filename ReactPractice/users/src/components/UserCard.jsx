import { useState } from "react";

const UserCard = ({ users }) => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="flex flex-wrap justify-center gap-8">
        {users.map((u) => (
          <Card key={u.id} user={u} />
        ))}
      </div>
    </div>
  );
};

const Card = ({ user }) => {
  const [showAddress, setShowAddress] = useState(false);
  const [showCompany, setShowCompany] = useState(false);
  const [showBank, setShowBank] = useState(false);
  const [showCrypto, setShowCrypto] = useState(false);

  return (
    <div className="w-80 bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="bg-blue-50 p-6 flex flex-col items-center">
        <img
          src={user.image}
          alt={user.firstName}
          className="w-24 h-24 rounded-full border-4 border-blue-500"
        />

        <h2 className="text-2xl font-bold mt-3">
          {user.firstName} {user.lastName}
        </h2>

        <p className="text-gray-500">@{user.username}</p>
      </div>

      <div className="p-5 space-y-2">
        <p>
          <strong>Email:</strong> {user.email}
        </p>

        <p>
          <strong>Phone:</strong> {user.phone}
        </p>

        <p>
          <strong>Age:</strong> {user.age}
        </p>

        <p>
          <strong>Gender:</strong> {user.gender}
        </p>

        <hr />

        {/* Address */}
        <button
          onClick={() => setShowAddress(!showAddress)}
          className="w-full bg-blue-500 text-white py-2 rounded"
        >
          {showAddress ? "Hide Address ▲" : "Show Address ▼"}
        </button>

        {showAddress && (
          <div className="mt-2 space-y-1">
            <p>{user.address.address}</p>
            <p>
              {user.address.city}, {user.address.state}
            </p>
            <p>{user.address.country}</p>
          </div>
        )}

        {/* Company */}
        <button
          onClick={() => setShowCompany(!showCompany)}
          className="w-full bg-green-500 text-white py-2 rounded"
        >
          {showCompany ? "Hide Company ▲" : "Show Company ▼"}
        </button>

        {showCompany && (
          <div className="mt-2 space-y-1">
            <p>
              <strong>Name:</strong> {user.company.name}
            </p>
            <p>
              <strong>Department:</strong> {user.company.department}
            </p>
            <p>
              <strong>Title:</strong> {user.company.title}
            </p>
          </div>
        )}

        {/* Bank */}
        <button
          onClick={() => setShowBank(!showBank)}
          className="w-full bg-purple-500 text-white py-2 rounded"
        >
          {showBank ? "Hide Bank ▲" : "Show Bank ▼"}
        </button>

        {showBank && (
          <div className="mt-2 space-y-1">
            <p>
              <strong>Card:</strong> {user.bank.cardType}
            </p>
            <p>
              <strong>Number:</strong> {user.bank.cardNumber}
            </p>
            <p>
              <strong>Currency:</strong> {user.bank.currency}
            </p>
          </div>
        )}

        {/* Crypto */}
        <button
          onClick={() => setShowCrypto(!showCrypto)}
          className="w-full bg-yellow-500 text-white py-2 rounded"
        >
          {showCrypto ? "Hide Crypto ▲" : "Show Crypto ▼"}
        </button>

        {showCrypto && (
          <div className="mt-2 space-y-1">
            <p>
              <strong>Coin:</strong> {user.crypto.coin}
            </p>
            <p>
              <strong>Wallet:</strong> {user.crypto.wallet}
            </p>
            <p>
              <strong>Network:</strong> {user.crypto.network}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserCard;
