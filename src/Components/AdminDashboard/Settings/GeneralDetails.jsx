

function GeneralDetails() {
  return (
    <div className="flex justify-center p-4">
      <div className="bg-stone-100 rounded-lg border-2 border-gray-200 w-full max-w-sm pt-6 pb-6 lg:pb-48 px-4 -mt-4">
        <nav className="flex flex-col space-y-4">
          <MenuItem text="General Details" />
          <MenuItem text="My Profile" />
          <MenuItem text="User Permission" />
          <MenuItem text="Payments" />
          <MenuItem text="Plans" />
          <MenuItem text="Notifications" isActive />
          <MenuItem text="Theme Preferences" />
          <MenuItem text="Language" />
        </nav>
      </div>
    </div>
  );
}

function MenuItem({ text, isActive = false }) {
  return (
    <button
      className={`text-left px-3 py-2 rounded-lg transition-colors text-xl ${isActive
        ? 'text-emerald-500 font-medium'
        : 'text-gray-700 hover:bg-gray-50 font-medium'
        }`}
    >
      {text}
    </button>
  );
}

export default GeneralDetails;