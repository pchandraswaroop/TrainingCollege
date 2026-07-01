import { useEffect, useMemo, useState } from "react";
import { createUser, deleteUser, getUsers, updateUser } from "./lib/api";

const emptyForm = {
  name: "",
  email: "",
  role: "",
  age: "",
  city: "",
  notes: "",
};

const knownFields = new Set([
  "_id",
  "name",
  "email",
  "role",
  "age",
  "city",
  "notes",
]);

const toText = (value) =>
  value === undefined || value === null ? "" : String(value);

const cleanPayload = (form) => {
  const payload = {};

  Object.entries(form).forEach(([key, value]) => {
    const trimmed = typeof value === "string" ? value.trim() : value;

    if (trimmed === "") {
      return;
    }

    payload[key] = key === "age" && trimmed !== "" ? Number(trimmed) : trimmed;
  });

  return payload;
};

const getUserLabel = (user) => {
  const label = user.name || user.email || user.role || user.city;
  return label || `User ${String(user._id).slice(-6)}`;
};

function App() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");
  const [search, setSearch] = useState("");

  const loadUsers = async () => {
    setLoading(true);
    setError("");

    try {
      const data = await getUsers();
      setUsers(data);
    } catch (loadError) {
      setError(loadError.message || "Unable to load users");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const stats = useMemo(() => {
    const filledRecords = users.filter((user) =>
      Object.entries(user).some(
        ([key, value]) =>
          key !== "_id" &&
          value !== "" &&
          value !== null &&
          value !== undefined,
      ),
    );
    const withEmail = users.filter((user) => user.email).length;

    return [
      {
        label: "Total users",
        value: users.length,
        accent: "from-slate-900 to-slate-700",
      },
      {
        label: "Records with email",
        value: withEmail,
        accent: "from-emerald-500 to-teal-500",
      },
      {
        label: "Filled profiles",
        value: filledRecords.length,
        accent: "from-amber-500 to-orange-500",
      },
    ];
  }, [users]);

  const filteredUsers = useMemo(() => {
    const term = search.trim().toLowerCase();

    if (!term) {
      return users;
    }

    return users.filter((user) => {
      return [user.name, user.email, user.role, user.city, user.notes]
        .filter(Boolean)
        .some((field) => String(field).toLowerCase().includes(term));
    });
  }, [search, users]);

  const resetForm = () => {
    setForm(emptyForm);
    setEditingId(null);
  };

  const startEdit = (user) => {
    setEditingId(user._id);
    setForm({
      name: toText(user.name),
      email: toText(user.email),
      role: toText(user.role),
      age: toText(user.age),
      city: toText(user.city),
      notes: toText(user.notes),
    });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const payload = cleanPayload(form);

    if (Object.keys(payload).length === 0) {
      setError("Add at least one field before saving.");
      return;
    }

    if ("age" in payload && Number.isNaN(payload.age)) {
      setError("Age must be a number.");
      return;
    }

    setSaving(true);
    setError("");

    try {
      if (editingId) {
        await updateUser(editingId, payload);
      } else {
        await createUser(payload);
      }

      await loadUsers();
      resetForm();
    } catch (submitError) {
      setError(submitError.message || "Unable to save user");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (user) => {
    const confirmed = window.confirm(`Delete ${getUserLabel(user)}?`);

    if (!confirmed) {
      return;
    }

    try {
      await deleteUser(user._id);

      if (editingId === user._id) {
        resetForm();
      }

      await loadUsers();
    } catch (deleteError) {
      setError(deleteError.message || "Unable to delete user");
    }
  };

  const renderExtraFields = (user) => {
    const extras = Object.entries(user).filter(
      ([key]) => !knownFields.has(key),
    );

    if (extras.length === 0) {
      return null;
    }

    return (
      <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-500">
        {extras.slice(0, 4).map(([key, value]) => (
          <span
            key={key}
            className="rounded-full border border-slate-200 bg-white px-3 py-1 shadow-sm"
          >
            {key}: {String(value)}
          </span>
        ))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.8),_transparent_30%),radial-gradient(circle_at_85%_15%,_rgba(251,191,36,0.18),_transparent_24%),linear-gradient(180deg,_#f7f2ea_0%,_#ece2d4_100%)] text-slate-900">
      <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col px-4 py-6 sm:px-6 lg:px-8">
        <header className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/75 px-6 py-8 shadow-glow backdrop-blur-xl sm:px-8">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(15,23,42,0.04),rgba(255,255,255,0))]" />
          <div className="relative grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
            <div>
              <p className="font-body text-xs font-semibold uppercase tracking-[0.35em] text-amber-700">
                MongoDB users dashboard
              </p>
              <h1 className="mt-4 max-w-3xl font-display text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
                Manage the users collection with a calm, high-contrast
                interface.
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
                Create, edit, search, and delete records directly against the
                backend API at{" "}
                <span className="font-medium text-slate-800">/api/users</span>.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-slate-200/80 bg-slate-950 px-4 py-4 text-white shadow-lg"
                >
                  <div
                    className={`h-1.5 w-16 rounded-full bg-gradient-to-r ${stat.accent}`}
                  />
                  <p className="mt-4 text-sm text-slate-300">{stat.label}</p>
                  <p className="mt-2 font-display text-3xl font-bold">
                    {stat.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </header>

        <main className="mt-6 grid flex-1 gap-6 xl:grid-cols-[0.9fr_1.1fr]">
          <section className="rounded-[2rem] border border-white/70 bg-white/85 p-6 shadow-glow backdrop-blur-xl sm:p-8">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
                  Record editor
                </p>
                <h2 className="mt-2 font-display text-2xl font-bold text-slate-950">
                  {editingId ? "Update user" : "Create user"}
                </h2>
              </div>
              {editingId ? (
                <button
                  type="button"
                  onClick={resetForm}
                  className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
                >
                  Cancel edit
                </button>
              ) : null}
            </div>

            <form className="mt-6 grid gap-4" onSubmit={handleSubmit}>
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-medium text-slate-700">
                  Name
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Amina Bello"
                    className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:bg-white"
                  />
                </label>

                <label className="grid gap-2 text-sm font-medium text-slate-700">
                  Email
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="amina@example.com"
                    className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:bg-white"
                  />
                </label>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                <label className="grid gap-2 text-sm font-medium text-slate-700">
                  Role
                  <input
                    name="role"
                    value={form.role}
                    onChange={handleChange}
                    placeholder="Developer"
                    className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:bg-white"
                  />
                </label>

                <label className="grid gap-2 text-sm font-medium text-slate-700">
                  Age
                  <input
                    name="age"
                    type="number"
                    value={form.age}
                    onChange={handleChange}
                    placeholder="28"
                    className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:bg-white"
                  />
                </label>

                <label className="grid gap-2 text-sm font-medium text-slate-700">
                  City
                  <input
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    placeholder="Lagos"
                    className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:bg-white"
                  />
                </label>
              </div>

              <label className="grid gap-2 text-sm font-medium text-slate-700">
                Notes
                <textarea
                  name="notes"
                  value={form.notes}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Add context, team details, or anything useful."
                  className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:bg-white"
                />
              </label>

              {error ? (
                <div className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
                  {error}
                </div>
              ) : null}

              <div className="flex flex-wrap gap-3 pt-2">
                <button
                  type="submit"
                  disabled={saving}
                  className="rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {saving
                    ? "Saving..."
                    : editingId
                      ? "Update user"
                      : "Create user"}
                </button>
                <button
                  type="button"
                  onClick={resetForm}
                  className="rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
                >
                  Clear form
                </button>
              </div>
            </form>
          </section>

          <section className="rounded-[2rem] border border-white/70 bg-white/85 p-6 shadow-glow backdrop-blur-xl sm:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500">
                  Users collection
                </p>
                <h2 className="mt-2 font-display text-2xl font-bold text-slate-950">
                  Live records
                </h2>
              </div>

              <label className="grid gap-2 text-sm font-medium text-slate-700 sm:w-72">
                Search
                <input
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search name, email, role, city"
                  className="rounded-full border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-slate-400 focus:bg-white"
                />
              </label>
            </div>

            <div className="mt-6">
              {loading ? (
                <div className="grid gap-4 md:grid-cols-2">
                  {Array.from({ length: 4 }).map((_, index) => (
                    <div
                      key={index}
                      className="h-40 animate-pulse rounded-3xl border border-slate-200 bg-slate-100"
                    />
                  ))}
                </div>
              ) : filteredUsers.length === 0 ? (
                <div className="rounded-3xl border border-dashed border-slate-300 bg-slate-50 px-6 py-12 text-center text-slate-500">
                  {search
                    ? "No users matched your search."
                    : "No users yet. Add the first record on the left."}
                </div>
              ) : (
                <div className="grid gap-4 md:grid-cols-2">
                  {filteredUsers.map((user) => (
                    <article
                      key={user._id}
                      className="rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="inline-flex rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-amber-800">
                            {user.role || "Profile"}
                          </p>
                          <h3 className="mt-3 font-display text-xl font-bold text-slate-950">
                            {getUserLabel(user)}
                          </h3>
                        </div>
                        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-950 text-sm font-bold text-white">
                          {getUserLabel(user).charAt(0).toUpperCase()}
                        </div>
                      </div>

                      <div className="mt-4 space-y-2 text-sm text-slate-600">
                        {user.email ? <p>{user.email}</p> : null}
                        {user.city ? <p>{user.city}</p> : null}
                        {user.age !== undefined &&
                        user.age !== null &&
                        user.age !== "" ? (
                          <p>Age: {user.age}</p>
                        ) : null}
                        {user.notes ? (
                          <p className="leading-6 text-slate-500">
                            {user.notes}
                          </p>
                        ) : null}
                      </div>

                      {renderExtraFields(user)}

                      <div className="mt-5 flex flex-wrap gap-3">
                        <button
                          type="button"
                          onClick={() => startEdit(user)}
                          className="rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-100"
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDelete(user)}
                          className="rounded-full border border-rose-200 bg-rose-50 px-4 py-2 text-sm font-semibold text-rose-700 transition hover:border-rose-300 hover:bg-rose-100"
                        >
                          Delete
                        </button>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
