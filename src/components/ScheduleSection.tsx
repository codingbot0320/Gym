const ScheduleSection = () => {
  const schedule = [
    { time: '06:00 - 07:00', monday: 'OPEN GYM', tuesday: 'CROSSFIT CLASS', wednesday: '', thursday: '', friday: '', saturday: 'CARDIO BURN', sunday: '' },
    { time: '07:00 - 08:00', monday: 'OPEN GYM', tuesday: '', wednesday: 'POWER LIFTING', thursday: 'POWER LIFTING', friday: '', saturday: '', sunday: 'OPEN GYM' },
    { time: '08:00 - 09:00', monday: '', tuesday: 'OPEN GYM', wednesday: '', thursday: '', friday: '', saturday: '', sunday: '' },
    { time: '09:00 - 10:00', monday: '', tuesday: '', wednesday: '', thursday: 'OPEN GYM', friday: '', saturday: '', sunday: '' },
    { time: '10:00 - 11:00', monday: 'OPEN GYM', tuesday: '', wednesday: '', thursday: '', friday: '', saturday: 'OPEN GYM', sunday: '' },
    { time: '11:00 - 12:00', monday: '', tuesday: '', wednesday: '', thursday: 'CROSSFIT CLASS', friday: 'CROSSFIT CLASS', saturday: 'CROSSFIT CLASS', sunday: '' },
    { time: '12:00 - 13:00', monday: 'POWER LIFTING', tuesday: '', wednesday: 'CARDIO BURN', thursday: '', friday: '', saturday: '', sunday: '' },
    { time: '18:00 - 19:00', monday: 'HIIT CLASS', tuesday: 'STRENGTH', wednesday: 'YOGA FLOW', thursday: 'CROSSFIT', friday: 'CARDIO', saturday: 'OPEN GYM', sunday: 'RECOVERY' },
    { time: '19:00 - 20:00', monday: 'OPEN GYM', tuesday: 'OPEN GYM', wednesday: 'OPEN GYM', thursday: 'OPEN GYM', friday: 'OPEN GYM', saturday: 'OPEN GYM', sunday: 'OPEN GYM' },
  ];

  const days = ['TIME', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY'];

  return (
    <section id="schedule" className="section-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="section-title">
            <span className="text-gradient">CLASSES</span> SCHEDULE
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Find the perfect class that fits your schedule and fitness goals.
            All classes are led by certified trainers.
          </p>
        </div>

        <div className="overflow-x-auto">
          <div className="min-w-full">
            {/* Header */}
            <div className="grid grid-cols-8 gap-px bg-border mb-px">
              {days.map((day) => (
                <div key={day} className="bg-accent text-accent-foreground p-4 text-center font-bold text-sm tracking-wider">
                  {day}
                </div>
              ))}
            </div>

            {/* Schedule Rows */}
            {schedule.map((slot, index) => (
              <div key={slot.time} className="grid grid-cols-8 gap-px bg-border mb-px">
                <div className="bg-secondary text-secondary-foreground p-4 text-center font-semibold text-sm">
                  {slot.time}
                </div>
                <div className="bg-card text-card-foreground p-4 text-center text-sm font-medium">
                  {slot.monday && (
                    <div className="bg-accent/10 text-accent rounded px-2 py-1 text-xs">
                      {slot.monday}
                    </div>
                  )}
                </div>
                <div className="bg-card text-card-foreground p-4 text-center text-sm font-medium">
                  {slot.tuesday && (
                    <div className="bg-accent/10 text-accent rounded px-2 py-1 text-xs">
                      {slot.tuesday}
                    </div>
                  )}
                </div>
                <div className="bg-card text-card-foreground p-4 text-center text-sm font-medium">
                  {slot.wednesday && (
                    <div className="bg-accent/10 text-accent rounded px-2 py-1 text-xs">
                      {slot.wednesday}
                    </div>
                  )}
                </div>
                <div className="bg-card text-card-foreground p-4 text-center text-sm font-medium">
                  {slot.thursday && (
                    <div className="bg-accent/10 text-accent rounded px-2 py-1 text-xs">
                      {slot.thursday}
                    </div>
                  )}
                </div>
                <div className="bg-card text-card-foreground p-4 text-center text-sm font-medium">
                  {slot.friday && (
                    <div className="bg-accent/10 text-accent rounded px-2 py-1 text-xs">
                      {slot.friday}
                    </div>
                  )}
                </div>
                <div className="bg-card text-card-foreground p-4 text-center text-sm font-medium">
                  {slot.saturday && (
                    <div className="bg-accent/10 text-accent rounded px-2 py-1 text-xs">
                      {slot.saturday}
                    </div>
                  )}
                </div>
                <div className="bg-card text-card-foreground p-4 text-center text-sm font-medium">
                  {slot.sunday && (
                    <div className="bg-accent/10 text-accent rounded px-2 py-1 text-xs">
                      {slot.sunday}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="btn-accent">
            BOOK A CLASS
          </button>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;